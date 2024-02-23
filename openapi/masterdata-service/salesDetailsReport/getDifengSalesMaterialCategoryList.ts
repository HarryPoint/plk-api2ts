import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/销售明细报表相关/getDifengSalesMaterialCategoryListUsingPOST
export default function fetchMethod(data: INameNumberDTO) {
    return post<IJSONResultListNameEncodesTheResponseDTO['data']>({
      url: "/masterdata-service/salesDetailsReport/getDifengSalesMaterialCategoryList",
      data,
    });
}
// 名称、编号DTO
export interface INameNumberDTO {
    // 名称or编号
    nameOrCode: string;
}
// JSONResult«List«名称编码响应 DTO»»
export interface IJSONResultListNameEncodesTheResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: INameEncodingResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 名称编码响应 DTO
export interface INameEncodingResponseDTO {
    // 名称
    name: string;
    // 编号
    code: string;
}
