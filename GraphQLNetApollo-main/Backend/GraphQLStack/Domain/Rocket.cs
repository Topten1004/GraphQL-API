namespace GraphQLStack.Domain;

public class Rocket
{
	public int Id { get; set; }
	public string Name { get; set; }
	public List<Engine> Engines { get; set; }
}