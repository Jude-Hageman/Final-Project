package com.example.controller;

import com.example.service.LlamaService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

// Suppress deprecation warnings for MockBean until you update to the new API supported by Spring Boot.
@SuppressWarnings("deprecation")
@WebMvcTest(LlamaControllerTest.class)
public class LlamaControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private LlamaService llamaService;

    /**
     * Tests that a valid input prompt returns the expected response.
     *
     * @throws Exception if an error occurs during the test.
     */
    @Test
    public void processText_ShouldReturnResponse() throws Exception {
        // Given: a non-empty prompt with a Bible reference.
        String inputText = "Can you explain John 3:16?";
        // Declare expectedResponse properly – ensure no phantom characters cause issues.
        String expectedResponse = "Here is an explanation of John 3:16...";

        // When llamaService.processText is called (with any string), it should return the expected response.
        when(llamaService.processText(anyString())).thenReturn(expectedResponse);

        // Then: perform the POST request and assert a 200 OK response containing the expected text.
        mockMvc.perform(post("/api/llama/process")
                        .contentType(MediaType.TEXT_PLAIN)
                        .content(inputText))
                .andExpect(status().isOk())
                .andExpect(content().string(expectedResponse));
    }

    /**
     * Tests that sending an empty input returns a Bad Request status.
     *
     * @throws Exception if an error occurs during the test.
     */
    @Test
    public void processText_WithEmptyInput_ShouldReturnBadRequest() throws Exception {
        // When & Then: perform POST with empty content and expect a 400 (Bad Request) status.
        mockMvc.perform(post("/api/llama/process")
                        .contentType(MediaType.TEXT_PLAIN)
                        .content(""))
                .andExpect(status().isBadRequest());
    }
}
