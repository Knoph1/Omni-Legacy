export function CompanyStats() {
  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "20+", label: "Team Members" },
    { number: "5", label: "Years of Excellence" },
  ]

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-primary-foreground/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
