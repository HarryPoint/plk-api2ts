import { post } from '@/api/http';
 
// http://47.108.139.107:18100/doc.html#/default/客户端组相关/addUsingPOST_1
export default function fetchMethod(data: ITheDTOIsAddedToTheClientGroup) {
    return post<IJSONResultobject['data']>({
      url: "/plk-uaa-service/clientGroup/add",
      data,
    });
}
// 客户端组新增 DTO
export interface ITheDTOIsAddedToTheClientGroup {
    // 编码
    code: string;
    // 名称
    name: string;
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
