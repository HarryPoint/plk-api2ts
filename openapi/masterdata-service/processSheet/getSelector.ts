import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工艺卡相关/getSelectorUsingPOST
*/
export default function fetchMethod(options: { data: IProcessCardSelectionListSearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListIdNameNumberVO>(
        {
            url: "/masterdata-service/processSheet/getSelector",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工艺卡选择列表搜索VO */
export interface IProcessCardSelectionListSearchVO {
    /** 物料id */
    materialId: string;
    /** 工序id */
    processId: string;
}
/** JSONResult«List«Id，名称，编号VO»» */
export interface IJSONResultListIdNameNumberVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IIdNameNumberVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** 编号 */
    code: string;
    /** id */
    id: string;
    /** 名称 */
    name: string;
}
