import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/宝晶即时库存查询相关/getMaterialTextureListUsingPOST
export function fetchMethod(params: { enterpriseId: number }) {
    return post({
      url: "/masterdata-service/baoJingWarehouseMaterial/getMaterialTextureList",
      params,
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
