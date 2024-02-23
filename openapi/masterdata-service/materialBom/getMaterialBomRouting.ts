import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/物料Bom相关/getMaterialBomRoutingUsingGET
export default function fetchMethod(params: { enterpriseId: number; materialId: number }) {
    return get<IJSONResultListMaterialBomRoutingVO['data']>({
      url: "/masterdata-service/materialBom/getMaterialBomRouting",
      params,
    });
}
// JSONResult«List«MaterialBomRoutingVO»»
export interface IJSONResultListMaterialBomRoutingVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IMaterialBomRoutingVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// MaterialBomRoutingVO
export interface IMaterialBomRoutingVO {
    // id
    id: number;
    // 编码
    code: string;
    // 名称
    name: string;
    // 工艺路径id
    routingId: number;
    // 工艺路径名称
    routingName: string;
    // 工艺路径编码
    routingCode: string;
}
