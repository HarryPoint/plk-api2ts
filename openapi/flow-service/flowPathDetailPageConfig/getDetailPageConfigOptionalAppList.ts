import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/详细页面配置-相关/getDetailPageConfigOptionalAppListUsingGET
*/
export default function fetchMethod(options: { params: { id?: number } }, extraOptions?: any) {
    return http<IJSONResultFlowPathDetailPageConfigOptionalAppResponseDTO>(
        {
            url: "/flow-service/flowPathDetailPageConfig/getDetailPageConfigOptionalAppList",
            method: "get",
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
    ts?: number;
}
/** FlowPathDetailPageConfigOptionalAppResponseDTO */
export interface IFlowPathDetailPageConfigOptionalAppResponseDTO {
    /** app列表 */
    appList?: IFlowPathBaseVO[];
}
/** FlowPathBaseVO */
export interface IFlowPathBaseVO {
    /** undefined */
    id?: number;
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
