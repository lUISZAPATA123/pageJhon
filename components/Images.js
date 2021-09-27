import Image from "next/image";

export default function Images({ imageUrl, nasaId }) {
  return (
    <div>
      <Image width={255} height={255} src={imageUrl} />
    </div>
  );
}
