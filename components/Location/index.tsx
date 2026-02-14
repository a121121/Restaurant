import Image from 'next/image';

export default function Location() {
    return (
        <section
            className="relative mx-auto w-full overflow-hidden p-4"
            role="map"
            aria-label="Qiolia Location on Google Maps"
        >
            <div className="flex flex-col lg:flex-row gap-4">

                {/* LEFT SIDE */}
                <div className="relative w-full lg:w-1/2 min-h-[300px] rounded-xl overflow-hidden">
                    {/* Image */}
                    <Image
                        src="/assets/about.webp"
                        alt="Description"
                        fill
                        className="object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Text */}
                    <div className="absolute bottom-6 left-6 z-10 text-foreground">
                        <h3 className="text-6xl uppercase tracking-wide text-center">About Us</h3>
                        {/* <p className="text-sm">Short description here</p> */}
                    </div>
                </div>


                {/* RIGHT SIDE */}
                <div className="flex flex-col w-full lg:w-1/2 gap-4">

                    {/* TOP ROW */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-3/5 h-auto bg-background rounded-xl border" >
                            <div className='flex flex-col justify-center items-start p-6 text-foreground gap-6'>
                                <h3 className='text-3xl uppercase tracking-wide'>Hello</h3>
                                <p className='text-muted-foreground text-justify'>Lorem ipsum dolor nostrum ullam reprehenderit rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-2/5 h-[120px] md:h-[180px] bg-background rounded-xl border" />
                    </div>

                    {/* MIDDLE ROW */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:flex-1 h-[100px] md:h-[140px] bg-background rounded-xl border" />
                        <div className="w-full md:flex-1 h-[100px] md:h-[140px] bg-background rounded-xl border" />
                        <div className="w-full md:flex-1 h-[100px] md:h-[140px] bg-background rounded-xl border" />
                    </div>

                    {/* BOTTOM ROW */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-3/5 h-[120px] md:h-[180px] bg-background rounded-xl border" />
                        <div className="w-full md:w-2/5 h-[120px] md:h-[180px] bg-background rounded-xl border" />
                    </div>

                </div>
            </div>
        </section>
    );
}
