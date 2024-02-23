import { http } from '@/api/http';

// http://47.108.139.107:16600/doc.html#/default/待办相关/completeCarbonCopyUsingPOST
export default function fetchMethod(data: ICcToDoChangeReadDTO, params: { enterpriseId: number; userId: number }) {
    return http<IJSONResultobject>({
        url: "/todo-service/todoList/completeCarbonCopy",
        method: "post",
        data,
        params,
    });
}
// 待办抄送变更已读DTO
export interface ICcToDoChangeReadDTO {
    // 是否全部标记已读
    isAll: string;
    // 单个标记id，isAll=N时必传
    id: number;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}