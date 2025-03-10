package com.songchengnan.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
// 用户实体类
public class User {
    private Integer userid; // 用户ID
    private Integer admin;// 是否是管理员 1是 2不是
    private String username; // 用户名
    private String password; // 密码
    private String number; // 用户身份证号
    private String userphone; // 用户电话


}
