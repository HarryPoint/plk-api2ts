import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16400/doc.html#/default/应用相关/getDetailPageConfigOptionalAppListUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultFlowPathDetailPageConfigOptionalAppResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/application/getDetailPageConfigOptionalAppList",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«FlowPathDetailPageConfigOptionalAppResponseDTO» */
export interface IJSONResultFlowPathDetailPageConfigOptionalAppResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFlowPathDetailPageConfigOptionalAppResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** FlowPathDetailPageConfigOptionalAppResponseDTO */
export interface IFlowPathDetailPageConfigOptionalAppResponseDTO {
    /** app列表 */
    appList?: IFlowPathBaseVO[];
}
/** FlowPathBaseVO */
export interface IFlowPathBaseVO {
    /** undefined */
    id?: string;
    /** undefined */
    code?: string;
    /** undefined */
    lastName?: string;
    /** undefined */
    type?: EFlowPathBaseVO_type;
}

export enum EFlowPathBaseVO_type {
    BILL = "BILL",
    DATA = "DATA",
    TREE_DATA = "TREE_DATA",
    PAGE = "PAGE"
}
