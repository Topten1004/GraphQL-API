using GraphQLStack.Domain;

namespace GraphQLStack.Graphql;

public class Query
{
	public Query(Context context)
	{
		context.Database.EnsureCreated();
	}

	[UseFiltering]
	public IQueryable<Rocket> GetRockets([Service] Context context)
	{
		return context.Rockets;
	}

	[UseFiltering]
	public IQueryable<Engine> GetEngines([Service] Context context)
	{
		return context.Engines;
	}
}