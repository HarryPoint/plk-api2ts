import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.139.107:16700/doc.html#/default/项目资源统计相关/listProjectDeviceInfoUsingPOST
*/
export default function fetchMethod(options: { data: INameNumberDTO }, extraOptions?: any) {
    return http<IJSONResultListProjectDeviceInformationResponseObject>(
        {
            url: "/masterdata-service/projectResourcesStatisticReport/listProjectDeviceInfo",
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
/** JSONResult«List«项目设备信息响应对象»» */
export interface IJSONResultListProjectDeviceInformationResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IItemDeviceInformationResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目设备信息响应对象 */
export interface IItemDeviceInformationResponseObject {
    /** 设备信息id */
    id?: string;
    /** 设备编号 */
    code?: string;
    /** 设备名称 */
    name?: string;
    /** 设备型号 */
    model?: string;
    /** 设备状态 */
    deviceStatus?: string;
    /** 设备状态描述 */
    deviceStatusDesc?: string;
}
