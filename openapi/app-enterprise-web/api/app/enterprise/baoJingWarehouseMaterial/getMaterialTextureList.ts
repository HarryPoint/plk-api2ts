import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/宝晶即时库存查询相关/getMaterialTextureListUsingPOST
export default function fetchMethod() {
    return http<IJSONResultListNameNumberVO>({
        url: "/app-enterprise-web/api/app/enterprise/baoJingWarehouseMaterial/getMaterialTextureList",
        method: "post",
    });
}
// JSONResult«List«名称，编号VO»»
export interface IJSONResultListNameNumberVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: INameNumberVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 名称，编号VO
export interface INameNumberVO {
    // 名称
    name: string;
    // 编号
    code: string;
}
