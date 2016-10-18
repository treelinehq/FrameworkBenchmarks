package hello.undertow;

import com.techempower.gemini.undertow.*;

public class GhUndertow extends InfrastructureUndertow
{
  
  public static void main(String... args)
  {
    GhUndertow gh = new GhUndertow();
    gh.run(args);
  }

  @Override
  public UndertowApplication getApplication()
  {
    return UndertowApplication.getInstance();
  }

}
