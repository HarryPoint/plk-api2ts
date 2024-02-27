import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/工艺路径相关/listRoutingInfoUsingPOST
*/
export default function fetchMethod(options: { data: IProcessPathInformationQueryObject, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProcessPathInformationObject>(
        {
            url: "/masterdata-service/routing/listRoutingInfo",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 工艺路径信息查询对象 */
export interface IProcessPathInformationQueryObject {
    /** 物料id */
    materialId?: string;
    /** 工艺路径名称 */
    routingName?: string;
}
/** JSONResult«List«工艺路径信息对象»» */
export interface IJSONResultListProcessPathInformationObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessPathInformationObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工艺路径信息对象 */
export interface IProcessPathInformationObject {
    /** 工艺路径id */
    id?: string;
    /** 工艺路径名称 */
    name?: string;
    /** 工艺路径编号 */
    code?: string;
    /** 工艺步骤列表 */
    routingStepList?: IProcessStepInformationObject[];
}
/** 工艺步骤信息对象 */
export interface IProcessStepInformationObject {
    /** 工序步骤id */
    id?: string;
    /** 工序id */
    processId?: string;
    /** 工序名称 */
    processName?: string;
    /** 工序编号 */
    processCode?: string;
}
