// components/HeroSection.jsx
export default function HeroSection({ title, content, list }) {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-4xl font-semibold text-gray-800">{title}</h2>
      {content && <p className="text-gray-700 leading-relaxed">{content}</p>}
      {list && (
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
