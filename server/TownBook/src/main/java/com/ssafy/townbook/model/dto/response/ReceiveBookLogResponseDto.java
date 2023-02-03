package com.ssafy.townbook.model.dto.response;

import com.ssafy.townbook.model.dto.BookLogDto;
import com.ssafy.townbook.model.entity.BookLog;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ReceiveBookLogResponseDto {
    
    private String bookTitle;
    private Long detailLockerNo;
    private Long tempNo;
    
    @Builder
    public ReceiveBookLogResponseDto(BookLog bookLog) {
        BookLogDto bookLogDto = new BookLogDto(bookLog);
        this.bookTitle = bookLogDto.getBookDto().getBookTitle();
        this.detailLockerNo = bookLogDto.getDetailLockerDto().getDetailLockerNo();
        
        Long idx = bookLogDto.getLockerDto().getDetailLocker().get(0).getDetailLockerNo();
        this.tempNo = bookLogDto.getDetailLockerDto().getDetailLockerNo() - idx + 1;
    }
}
