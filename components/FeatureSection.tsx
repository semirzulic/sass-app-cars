import Image from "next/image"

const FeatureSection = () => {
    const features = [
        {
            icon: <Image src="/towing.png" alt="Car Towing" className="w-16 h-16" width={30} height={30} />,
            title: "Car Towing",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
        },
        {
            icon:<Image src="/hail.png" alt="Hail Damage" className="w-16 h-16" width={30} height={30} />,
            title: "Hail Damage",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
        },
        {
            icon:<Image src="/flood.png" alt="Flood Insurance Coverage" className="w-16 h-16" width={30} height={30} />,
            title: "Flood Insurance Coverage",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
        },
        {
            icon:<Image src="/accident.png" alt="Accident Insurance" className="w-16 h-16" width={30} height={30} />,
            title: "Accident Insurance",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
        },
        {
            icon:<Image src="/fire.png" alt="Fire Insurance" className="w-16 h-16" width={30} height={30} />,
            title: "Fire Insurance",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
        },
        {
            icon:<Image src="/motocycle.png" alt="Motorcycle Towing" className="w-16 h-16" width={30} height={30} />,
            title: "Motorcycle Towing",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
        },
    ]
    
        return (
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 text-cente md:px-8">
                    <div className="flex justify-center items-center max-w-6xl mx-auto">
                        <div>
                            <h3 className=" text-3xl font-semibold sm:text-4xl">
                                The fastest way to launch a product
                            </h3>
                            <p className="mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.
                            </p>
                        </div>
                        <div className='relative w-full h-40 my-3 object-contain'>
                            <Image src='/hook.png' alt='car model' fill priority className='object-contain' />
                        </div>
                    </div>
                    <div className="mt-12">
                        <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                features.map((item, idx) => (
                                    <li key={idx} className="space-y-3">
                                        <div className="w-16 h-16 mx-auto text-indigo-600 bg-indigo-50 rounded-full flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <h4 className="text-lg font-semibold">
                                            {item.title}
                                        </h4>
                                        <p>
                                            {item.desc}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        )
    }

export default FeatureSection;
