import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/物料相关/getMaterialNameCodeListUsingPOST
*/
export default function fetchMethod(options: { data: IMaterialNameNumberQueryVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListReturnInformationAboutTheMaterial>(
        {
            url: "/masterdata-service/material/getMaterialNameCodeList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 物料名称编号查询VO */
export interface IMaterialNameNumberQueryVO {
    /** 物料类型数组 */
    materialTypeList?: string[];
    /** 物料名称/编号 */
    nameOrCode?: string;
}
/** JSONResult«List«物料返回信息»» */
export interface IJSONResultListReturnInformationAboutTheMaterial {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IMaterialReturnInformation[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 物料返回信息 */
export interface IMaterialReturnInformation {
    /** 编号 */
    code?: string;
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 物料规格 */
    spec?: string;
    /** 物料类型 */
    type?: string;
    /** 物料类型名称 */
    typeName?: string;
}
