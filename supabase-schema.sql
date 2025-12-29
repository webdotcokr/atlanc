-- Supabase Schema for Atlanc Admin System
-- Run this SQL in your Supabase project's SQL Editor

-- =====================================================
-- 1. DESIGNERS TABLE
-- =====================================================
CREATE TABLE designers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  location VARCHAR(20) NOT NULL CHECK (location IN ('sinsa', 'konkuk')),
  name VARCHAR(100) NOT NULL,
  position VARCHAR(50) NOT NULL,
  image VARCHAR(500) NOT NULL,
  social_wonbar VARCHAR(100),
  social_instagram VARCHAR(100),
  url_instagram VARCHAR(500) NOT NULL,
  url_booking VARCHAR(500) NOT NULL,
  url_youtube VARCHAR(500),
  description TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for faster location-based queries
CREATE INDEX idx_designers_location ON designers(location);
CREATE INDEX idx_designers_active_location ON designers(is_active, location, display_order);

-- =====================================================
-- 2. FRANCHISE INQUIRIES TABLE
-- =====================================================
CREATE TABLE franchise_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  desired_location VARCHAR(200) NOT NULL,
  privacy_consent BOOLEAN DEFAULT true,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'completed', 'cancelled')),
  notes TEXT,
  email_sent BOOLEAN DEFAULT false,
  email_sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for listing and filtering
CREATE INDEX idx_inquiries_status ON franchise_inquiries(status);
CREATE INDEX idx_inquiries_created ON franchise_inquiries(created_at DESC);

-- =====================================================
-- 3. ADMIN SESSIONS TABLE
-- =====================================================
CREATE TABLE admin_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_token VARCHAR(255) UNIQUE NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for token lookup
CREATE INDEX idx_sessions_token ON admin_sessions(session_token);
CREATE INDEX idx_sessions_expires ON admin_sessions(expires_at);

-- =====================================================
-- 4. ROW LEVEL SECURITY (RLS) - Optional but recommended
-- =====================================================
-- Note: Since we're using service_role key for API routes,
-- RLS won't block our requests, but it's still good practice

-- Enable RLS
ALTER TABLE designers ENABLE ROW LEVEL SECURITY;
ALTER TABLE franchise_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_sessions ENABLE ROW LEVEL SECURITY;

-- Public can read active designers
CREATE POLICY "Public can read active designers"
  ON designers FOR SELECT
  USING (is_active = true);

-- Public can insert inquiries
CREATE POLICY "Public can insert inquiries"
  ON franchise_inquiries FOR INSERT
  WITH CHECK (true);

-- Service role has full access (used by API routes)
-- Note: service_role key bypasses RLS automatically

-- =====================================================
-- 5. SEED DATA - Initial designers (optional)
-- =====================================================
-- Sinsa designers
INSERT INTO designers (location, name, position, image, social_wonbar, social_instagram, url_instagram, url_booking, url_youtube, description, display_order) VALUES
('sinsa', '태원빠', '대표 원장', '/sinsa/태원빠.webp', '@WonBar', '@atlanc_wonbar', 'https://instagram.com/atlanc_wonbar', 'https://naver.me/GfCpS0ha', 'https://www.youtube.com/channel/UCgil4B6Ag7wC9j0nXLPEhpQ', '항상 저희 아뜰랑 맨즈헤어를 빛나게 해주셔서 감사합니다!!', 1),
('sinsa', '다애', '실장', '/sinsa/다애.webp', NULL, '@atlanc_daae', 'https://instagram.com/atlanc_daae', 'https://naver.me/GB0zpbjR', NULL, '| 컨설팅 마스터 | 일상 속 완벽한 변화는 헤어스타일로부터 시작됩니다. 두상과 얼굴형에 가장 최적인 당신만의 이미지를 디자인합니다.', 2),
('sinsa', '서한', '디자이너', '/sinsa/서한.webp', NULL, '@atlanc_s', 'https://instagram.com/atlanc_s', 'https://naver.me/5UT9DgW2', NULL, '편한 손질로 하루의 시작을 행복하게 만들어드립니다!', 3),
('sinsa', '수현', '디자이너', '/sinsa/수현.webp', NULL, '@atlanc_soohyun', 'https://instagram.com/atlanc_soohyun', 'https://naver.me/xXDTs98A', NULL, '여자들이 좋아하는 꾸안꾸 느낌의 네추럴한 스타일을 추구합니다. 지나치게 화려하거나 인위적이지 않은, 가볍고 손질이 편한 디자인으로 고객님 본연의 아름다움을 살려 드리겠습니다!!', 4),
('sinsa', '승빈', '디자이너', '/sinsa/승빈.webp', NULL, '@atlanc_bin', 'https://instagram.com/atlanc_bin', 'https://naver.me/GG7lQx3C', NULL, '대한민국 남성의 두상·모질·라이프스타일까지 고려한 1:1 맞춤 헤어 컨설턴트, 승빈T', 5),
('sinsa', '범', '디자이너', '/sinsa/범.webp', NULL, 'atlanc_bum', 'https://www.instagram.com/atlanc_bum', 'https://naver.me/FjC2sZ66', NULL, '샤프하고 트렌디한 디자인을 추구합니다. 간편한 손질과 요즘 느낌의 멋스러운 포인트로, 본인이 가진 개성과 분위기를 살린 멋을 만들어 드립니다!!', 6);

-- Konkuk designers
INSERT INTO designers (location, name, position, image, social_wonbar, social_instagram, url_instagram, url_booking, url_youtube, description, display_order) VALUES
('konkuk', '태원빠', '대표 원장', '/konkuk/태원빠.webp', '@WonBar', '@atlanc_wonbar', 'https://instagram.com/atlanc_wonbar', 'https://naver.me/G9pb9FlM', 'https://www.youtube.com/channel/UCgil4B6Ag7wC9j0nXLPEhpQ', '항상 저희 아뜰랑 맨즈헤어를 빛나게 해주셔서 감사합니다!!', 1),
('konkuk', '민종', '원장', '/konkuk/민종.webp', NULL, 'atlanc_minjong', 'https://instagram.com/atlanc_minjong', 'https://naver.me/FgTHJqD1', NULL, '대화와 디테일로 당신만의 분위기를 디자인해, 더 나은 하루를 만들어드립니다.', 2),
('konkuk', '영재', '팀장', '/konkuk/영재.webp', NULL, 'atlanc_genius.0', 'https://instagram.com/atlanc_genius.0', 'https://naver.me/Gq9JsxDL', NULL, '헤어스타일 하나로 당신의 인생이 달라지게 만들어 드리겠습니다!', 3),
('konkuk', '새로', '디자이너', '/konkuk/새로.webp', NULL, 'atlanc_saero', 'https://instagram.com/atlanc_saero', 'https://naver.me/FkL7Wemh', NULL, '[당신만을 위한 1:1 맞춤 컨설팅] 실패 없는 맞춤 컨설팅으로 디테일한 디자인을 선물해드립니다.', 4),
('konkuk', '승원', '디자이너', '/konkuk/승원.webp', NULL, 'atlanc_sw', 'https://instagram.com/atlanc_sw', 'https://naver.me/FdosOn3T', NULL, '스타일은 바뀌어도, 인생머리는 진심에서 시작됩니다.', 5);
