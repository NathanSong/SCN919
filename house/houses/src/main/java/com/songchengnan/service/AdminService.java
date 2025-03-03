package com.songchengnan.service;

import com.songchengnan.pojo.Message;
import com.songchengnan.pojo.PageBean;
import com.songchengnan.pojo.User;

// 管理员业务规则
public interface AdminService {
    void save(User user);

    void login(String username, String password, Integer admin);


    void deleteByUsername(String username);

    PageBean page(Integer page, Integer pageSize);

    void update(User user);

    void addMessage(Message message);

    PageBean pageMessage(String estateName,Integer page, Integer pageSize);


    void deleteMessage(String messagetitle, String messagename);


}