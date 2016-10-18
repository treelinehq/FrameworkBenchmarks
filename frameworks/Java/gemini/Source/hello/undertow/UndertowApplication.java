package hello.undertow;

import com.techempower.*;
import com.techempower.gemini.*;
import com.techempower.gemini.path.*;
import com.techempower.js.*;
import com.techempower.js.legacy.*;

import hello.*;
import hello.home.entity.*;
import hello.home.handler.*;

/**
 * GeminiHello Application.  As a subclass of GeminiApplication, this
 * class acts as the central "hub" of references to components such as
 * the Dispatcher and EntityStore.
 *
 * Development history:
 *   2012-04-19 - mh - Created
 *
 * @author mhixson
 */
public class UndertowApplication
     extends UndertowGeminiApplication
{
  //
  // Static variables.
  //

  private static final UndertowApplication INSTANCE = new UndertowApplication();

  //
  // Member methods.
  //

  /**
   * Constructor.  This method can be extended to construct references
   * to custom components for the application.
   */
  public UndertowApplication()
  {
    super();
  }

  //
  // Protected component constructors.
  //

  /**
   * Constructs a Version reference.  This is overloaded to return a
   * custom GhVersion object.
   */
  @Override
  protected Version constructVersion()
  {
    return new GhVersion();
  }

  /**
   * Creates a JavaScriptWriter for writing JSON.
   */
  @Override
  protected JavaScriptWriter constructJavaScriptWriter()
  {
    return LegacyJavaScriptWriter.custom()
        .addVisitorFactory(World.class, World.VISITOR_FACTORY)
        .build();
  }

  /**
   * Constructs a Dispatcher.
   */
  @Override
  protected Dispatcher constructDispatcher()
  {
    final PathDispatcher.Configuration<Context> config = new PathDispatcher.Configuration<>();

    config.setDefault(new HelloHandler(this))
          .add(new LoggingExceptionHandler(this));

    return new PathDispatcher<>(this, config);
  }

  //
  // Static methods.
  //

  public static UndertowApplication getInstance()
  {
    return INSTANCE;
  }

}   // End GhApplication.

