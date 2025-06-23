import Image from 'next/image';

interface Props {
    bank: string;
    number: string;
    name: string;
    exp: string;
    logo: string;
}

export default function BankAccountCard({ bank, number, name, exp, logo }: Props) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between min-w-[280px] relative overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
                <Image src={logo} alt={bank} width={32} height={32} />
                <span className="font-semibold text-lg">{bank}</span>
            </div>
            <div className="text-xl font-mono tracking-widest mb-2">{number}</div>
            <div className="flex justify-between items-center text-xs text-gray-500">
                <span>{name}</span>
                <span>Exp: {exp}</span>
            </div>
            <div className="absolute right-4 top-4 opacity-10 text-7xl select-none pointer-events-none">
                <Image src={logo} alt="bg" width={120} height={120} />
            </div>
        </div>
    );
} 