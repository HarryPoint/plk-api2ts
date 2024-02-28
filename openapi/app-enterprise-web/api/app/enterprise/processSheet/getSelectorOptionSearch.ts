import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/工艺卡相关/getSelectorOptionSearchUsingPOST_4
*/
export default function fetchMethod(options: { data: IProcessDropDownListToSearchForDtos }, extraOptions?: any) {
    return http<IJSONResultListProcessDropDownListToSearchForResponseDtos>(
        {
            url: "/app-enterprise-web/api/app/enterprise/processSheet/getSelectorOptionSearch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工艺卡下拉选择列表搜索DTO */
export interface IProcessDropDownListToSearchForDtos {
    /** 物料id */
    materialId?: string;
    /** 工序id */
    processId?: string;
    /** 工艺卡名称 */
    processSheetName?: string;
}
/** JSONResult«List«工艺卡下拉选择列表搜索响应DTO»» */
export interface IJSONResultListProcessDropDownListToSearchForResponseDtos {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessDropDownSelectListSearchResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工艺卡下拉选择列表搜索响应DTO */
export interface IProcessDropDownSelectListSearchResponseDTO {
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
}
