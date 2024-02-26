import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/工艺路径相关/listRoutingInfoUsingPOST
*/
export default function fetchMethod(data: IProcessPathInformationQueryObject, extraOptions?: any) {
    return http<IJSONResultListProcessPathInformationObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/routing/listRoutingInfo",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 工艺路径信息查询对象 */
export interface IProcessPathInformationQueryObject {
    /** 物料id */
    materialId?: number;
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
    ts?: number;
}
/** 工艺路径信息对象 */
export interface IProcessPathInformationObject {
    /** 工艺路径id */
    id?: number;
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
    id?: number;
    /** 工序id */
    processId?: number;
    /** 工序名称 */
    processName?: string;
    /** 工序编号 */
    processCode?: string;
}
