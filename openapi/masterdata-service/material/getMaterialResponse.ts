import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/物料相关/getMaterialResponseUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultMaterialReturnInformation>(
        {
            url: "/masterdata-service/material/getMaterialResponse",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«物料返回信息» */
export interface IJSONResultMaterialReturnInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IMaterialReturnInformation;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 物料返回信息 */
export interface IMaterialReturnInformation {
    /** id */
    id?: string;
    /** 编号 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 物料类型 */
    type?: string;
    /** 物料类型名称 */
    typeName?: string;
    /** 物料规格 */
    spec?: string;
}
