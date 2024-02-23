import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产工艺相关/queryMaterialBomListUsingPOST
export default function fetchMethod(data: number[]) {
    return post<IJSONResultListProduceTechnologyMaterialBomDTO>({
      url: "/masterdata-service/produceTechnology/queryMaterialBomList",
      data,
    });
}
// JSONResult«List«ProduceTechnologyMaterialBomDTO»»
export interface IJSONResultListProduceTechnologyMaterialBomDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProduceTechnologyMaterialBomDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// ProduceTechnologyMaterialBomDTO
export interface IProduceTechnologyMaterialBomDTO {
    // undefined
    id: number;
    // undefined
    materialId: number;
    // undefined
    materialBomId: number;
    // undefined
    name: string;
    // undefined
    code: string;
    // undefined
    produceTechnologyId: number;
}
