using GraphQLStack.Domain;
using Microsoft.EntityFrameworkCore;

namespace GraphQLStack;

public class Context : DbContext
{
	public DbSet<Rocket> Rockets { get; set; }
	public DbSet<Engine> Engines { get; set; }

	public Context(DbContextOptions options) : base(options)
	{
	}

	protected override void OnModelCreating(ModelBuilder modelBuilder)
	{
		modelBuilder.Entity<Rocket>().HasKey(r => r.Id);
		modelBuilder.Entity<Engine>().HasKey(e => e.Id);

		modelBuilder.Entity<Rocket>().HasData(new Rocket { Id = 1, Name = "Falcon 9" });
		modelBuilder.Entity<Engine>().HasData(
			new Engine { Id = 1, Name = "Merlin 1D+", RocketId = 1, Type = EngineType.SeaLevel, Isp = 310, Thrust = 420 },
			new Engine { Id = 2, Name = "Merlin 1D+", RocketId = 1, Type = EngineType.Vacuum, Isp = 348, Thrust = 225 }
		);
	}
}