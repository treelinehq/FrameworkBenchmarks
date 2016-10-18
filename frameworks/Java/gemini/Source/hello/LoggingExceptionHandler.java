package hello;

import com.esotericsoftware.minlog.Log;
import com.techempower.gemini.*;
import com.techempower.gemini.exceptionhandler.*;
import com.techempower.log.*;

/**
 * A default exception handler that simply logs thrown exceptions.
 * 
 *
 * @author jfennell
 */
public class LoggingExceptionHandler 
implements   ExceptionHandler
{
  
  private final String       COMPONENT_CODE = "logx";
  private final ComponentLog log;

  public LoggingExceptionHandler(GeminiApplication app) {
     this.log = app.getLog(COMPONENT_CODE);
  }
  
  @Override
  public void handleException(Context context, Throwable exc)
  {
    handleException(context, exc, null);
  }

  @Override
  public void handleException(Context context, Throwable exception, String description)
  {
    log.log("Exception thrown", Log.LEVEL_ERROR, exception);
    
  }

}

 