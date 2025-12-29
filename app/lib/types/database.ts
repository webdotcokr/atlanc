// Database types for Supabase tables

export interface Designer {
  id: string;
  location: 'sinsa' | 'konkuk';
  name: string;
  position: string;
  image: string;
  social_wonbar: string | null;
  social_instagram: string | null;
  url_instagram: string;
  url_booking: string;
  url_youtube: string | null;
  description: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface DesignerInsert {
  location: 'sinsa' | 'konkuk';
  name: string;
  position: string;
  image: string;
  social_wonbar?: string | null;
  social_instagram?: string | null;
  url_instagram: string;
  url_booking: string;
  url_youtube?: string | null;
  description: string;
  display_order?: number;
  is_active?: boolean;
}

export interface DesignerUpdate {
  location?: 'sinsa' | 'konkuk';
  name?: string;
  position?: string;
  image?: string;
  social_wonbar?: string | null;
  social_instagram?: string | null;
  url_instagram?: string;
  url_booking?: string;
  url_youtube?: string | null;
  description?: string;
  display_order?: number;
  is_active?: boolean;
}

// Frontend-friendly designer format
export interface DesignerDisplay {
  id: string;
  location: 'sinsa' | 'konkuk';
  name: string;
  position: string;
  image: string;
  social: {
    wonbar?: string;
    instagram?: string;
  };
  urls: {
    instagram: string;
    booking: string;
    youtube?: string;
  };
  description: string;
  displayOrder: number;
  isActive: boolean;
}

export interface FranchiseInquiry {
  id: string;
  name: string;
  phone: string;
  desired_location: string;
  privacy_consent: boolean;
  status: 'pending' | 'contacted' | 'completed' | 'cancelled';
  notes: string | null;
  email_sent: boolean;
  email_sent_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface FranchiseInquiryInsert {
  name: string;
  phone: string;
  desired_location: string;
  privacy_consent?: boolean;
}

export interface FranchiseInquiryUpdate {
  status?: 'pending' | 'contacted' | 'completed' | 'cancelled';
  notes?: string | null;
  email_sent?: boolean;
  email_sent_at?: string | null;
}

export interface AdminSession {
  id: string;
  session_token: string;
  expires_at: string;
  created_at: string;
}

// Transform database designer to frontend format
export function toDesignerDisplay(designer: Designer): DesignerDisplay {
  return {
    id: designer.id,
    location: designer.location,
    name: designer.name,
    position: designer.position,
    image: designer.image,
    social: {
      wonbar: designer.social_wonbar || undefined,
      instagram: designer.social_instagram || undefined,
    },
    urls: {
      instagram: designer.url_instagram,
      booking: designer.url_booking,
      youtube: designer.url_youtube || undefined,
    },
    description: designer.description,
    displayOrder: designer.display_order,
    isActive: designer.is_active,
  };
}

// Transform frontend format to database insert format
export function toDesignerInsert(display: Omit<DesignerDisplay, 'id' | 'isActive' | 'displayOrder'> & { displayOrder?: number; isActive?: boolean }): DesignerInsert {
  return {
    location: display.location,
    name: display.name,
    position: display.position,
    image: display.image,
    social_wonbar: display.social.wonbar || null,
    social_instagram: display.social.instagram || null,
    url_instagram: display.urls.instagram,
    url_booking: display.urls.booking,
    url_youtube: display.urls.youtube || null,
    description: display.description,
    display_order: display.displayOrder ?? 0,
    is_active: display.isActive ?? true,
  };
}
