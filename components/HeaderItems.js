import Link from "next/link";

export default function HeaderItems({ Icon, title, destino }) {
  return (
    <div>
      <Link href={destino}>
        <Icon
          className="h-8 text-2xl text-white cursor-pointer group-hover:animate-bounce"
          title={title}
        />
      </Link>
    </div>
  );
}
