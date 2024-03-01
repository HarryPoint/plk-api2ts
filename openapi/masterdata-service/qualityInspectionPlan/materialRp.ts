import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/质检方案/materialRpUsingPOST
*/
export default function fetchMethod(options: { data: IQualityControlSolutionMaterialApplicationAssociationInformationEditDTO, params: { enterpriseId?: string; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/qualityInspectionPlan/materialRp",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 质检方案物料应用关联信息编辑DTO */
export interface IQualityControlSolutionMaterialApplicationAssociationInformationEditDTO {
    /** 质检方案id */
    id?: string;
    /** 物料id集 */
    materialIds?: string[];
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
