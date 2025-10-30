export default function TestPage() {
  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-6xl font-bold text-white mb-4">TEST PAGE</h1>
        <p className="text-2xl text-blue-400 mb-4">If you can see this, React is working!</p>
        <div className="bg-blue-600 p-8 rounded-lg mb-4">
          <p className="text-white text-xl">This is a blue box with white text</p>
        </div>
        <div className="glass-card p-8 rounded-lg">
          <p className="text-white text-xl">This is a glass card</p>
        </div>
      </div>
    </div>
  );
}
