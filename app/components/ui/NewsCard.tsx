interface NewsCardProps {
    date: string;
    day: number;
    title: string;
    imageUrl: string;
}

export default function NewsCard({ date, day, title, imageUrl }: NewsCardProps) {
    return (
        <div className="bg-white flex flex-col gap-3 p-8 pt-10 pb-8 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] h-full">
            <div className="flex flex-col items-start w-[46px]">
                <p className="font-regular text-[14px] text-zinc-500 tracking-[-0.14px] leading-[1.5] px-0.5">
                    {date}
                </p>
                <p className="font-semibold text-[#242423] text-[36px] text-center tracking-[-1.08px] leading-[1.3]">
                    {day}
                </p>
            </div>
            <div className="flex flex-col gap-3 w-full flex-grow">
                <p className="font-medium text-[#242423] text-[18px] tracking-[-0.18px] leading-[1.5] overflow-hidden line-clamp-2">
                    {title}
                </p>
                <div 
                    className="h-[200px] w-full bg-cover bg-center bg-[#d9d9d9] flex-shrink-0 rounded"
                    style={{ backgroundImage: `url('${imageUrl}')` }}
                />
            </div>
        </div>
    );
}