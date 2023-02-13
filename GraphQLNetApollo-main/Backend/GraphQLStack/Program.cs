using GraphQL.Server.Ui.Voyager;
using GraphQLStack;
using GraphQLStack.Graphql;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddDbContextFactory<Context>(options => options.UseInMemoryDatabase("InMemoryDb"));

//graphQL
builder.Services
	.AddGraphQLServer()
	.AddQueryType<Query>()
	.AddFiltering();


builder.Services.AddCors(options =>
{
	options.AddPolicy(name: MyAllowSpecificOrigins,
		policy =>
		{
			policy.AllowAnyOrigin()
				.AllowAnyHeader()
				.AllowAnyMethod();
		});
});

var app = builder.Build();

app.UseCors(MyAllowSpecificOrigins);

// Add GraphQL endpoint configuration
app.UseRouting().UseEndpoints(endpoints =>
{
	endpoints.MapGraphQL();
	endpoints.MapControllers();
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseGraphQLVoyager(new VoyagerOptions { GraphQLEndPoint = "/graphql" }, "/graphql-voyager");

app.Run();
