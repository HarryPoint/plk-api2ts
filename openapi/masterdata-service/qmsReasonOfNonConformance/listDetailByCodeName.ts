import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/不合格原因服务相关/listDetailByCodeNameUsingPOST
export default function fetchMethod(data: INameNumberDTO) {
    return http<IJSONResultListIdCodeNameACommonTransferObject>({
        url: "/masterdata-service/qmsReasonOfNonConformance/listDetailByCodeName",
        method: "post",
        data,
    });
}
// 名称、编号DTO
export interface INameNumberDTO {
    // 名称or编号
    nameOrCode: string;
}
// JSONResult«List«Id Code Name 通用传输对象»»
export interface IJSONResultListIdCodeNameACommonTransferObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IIdCodeNameGenericTransportObject[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// Id Code Name 通用传输对象
export interface IIdCodeNameGenericTransportObject {
    // id
    id: number;
    // code
    code: string;
    // name
    name: string;
}
