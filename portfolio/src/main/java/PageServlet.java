// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import java.io.IOException;
import java.util.ArrayList;
import java.util.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns HTML that contains the page view count. */
@WebServlet("/random")
public class PageServlet extends HttpServlet {
String[] randomText = {"pineapple", "pear", "apricot", "durian"};

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
     response.setContentType("text/html;");
     Random random = new Random();
        // generate random number from 0 to 3
    int num = random.nextInt(randomText.length);
    response.getWriter().println(randomText[num]);
  }
}
