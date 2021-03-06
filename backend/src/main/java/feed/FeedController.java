package feed;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class FeedController {

    @GetMapping("/crocodiles")
    public FeedingResult feedCrocodiles() {
        return new FeedingResult("Feeding the crocodiles!");
    }

    @GetMapping("/spiders")
    public FeedingResult feedSpiders() {
        return new FeedingResult("Feeding the spiders!");
    }

    @GetMapping("/aliens")
    public FeedingResult feedAliens() {
        return new FeedingResult("Feeding the aliens!");
    }

}