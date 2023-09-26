export default function WelcomePage() {
  return (
    <div className="text-center py-12 lg:py-44">
      <h1 className="text-4xl md:text-4xl lg:text-8xl font-semibold mb-12">Consultant DevOps</h1>
      <h2 className="text-xl lg:text-2xl mb-4">
        Spécialisé en Kubernetes, Terraform et Cloud
      </h2>
      <h3 className="text-xl lg:text-2xl mb-16 md:mb-8">Je conçoie et déploie vos infrastructures</h3>
      <div className="flex gap-2 justify-center flex-col md:flex-row px-6">
        <button className="border-2 rounded-full p-4 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">mes services</button>
        <button className="p-4 border-primary-600 text-primary-600 hover:underline underline-offset-8">discutons de vos besoins</button>
      </div>
    </div>
  );
}