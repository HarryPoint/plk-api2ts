import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/客户端相关/addUsingPOST
export default function fetchMethod(data: ITheDTOIsAddedToTheClient) {
    return http<IJSONResultobject>({
        url: "/plk-uaa-service/client/add",
        method: "post",
        data,
    });
}
// 客户端新增 DTO
export interface ITheDTOIsAddedToTheClient {
    // 编码
    code: string;
    // 名称
    name: string;
    // 登录类型
    loginType: string;
    // 客户端组
    clientGroup: IExampleModifyTheDTOOfAClientGroup;
}
// 客户端组修改 DTO
export interface IExampleModifyTheDTOOfAClientGroup {
    // 编码
    code: string;
    // 名称
    name: string;
    // id
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
