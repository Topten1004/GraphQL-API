namespace GraphQLStack.Domain;

public class Engine
{
	public int Id { get; set; }
	public string Name { get; set; }
	public int Thrust { get; set; }
	public int Isp { get; set; }
	public EngineType Type { get; set; }
	public int RocketId { get; set; }
}