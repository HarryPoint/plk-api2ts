import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/销售明细报表相关/getDifengSalesMaterialCategoryListUsingPOST
*/
export default function fetchMethod(options: { data: INameNumberDTO }, extraOptions?: any) {
    return http<IJSONResultListNameEncodesTheResponseDTO>(
        {
            url: "/masterdata-service/salesDetailsReport/getDifengSalesMaterialCategoryList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 名称、编号DTO */
export interface INameNumberDTO {
    /** 名称or编号 */
    nameOrCode?: string;
}
/** JSONResult«List«名称编码响应 DTO»» */
export interface IJSONResultListNameEncodesTheResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: INameEncodingResponseDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 名称编码响应 DTO */
export interface INameEncodingResponseDTO {
    /** 编号 */
    code: string;
    /** 名称 */
    name: string;
}
