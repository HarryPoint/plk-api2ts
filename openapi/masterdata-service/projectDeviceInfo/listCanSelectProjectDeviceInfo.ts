import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.139.107:16700/doc.html#/default/项目设备信息相关/listCanSelectProjectDeviceInfoUsingPOST
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListProjectDeviceInformationResponse>(
        {
            url: "/masterdata-service/projectDeviceInfo/listCanSelectProjectDeviceInfo",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目设备信息响应»» */
export interface IJSONResultListProjectDeviceInformationResponse {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectDeviceInformationResponse[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目设备信息响应 */
export interface IProjectDeviceInformationResponse {
    /** id */
    id?: string;
    /** 项目编号 */
    code?: string;
    /** 项目名称 */
    name?: string;
    /** 设备型号 */
    model?: string;
    /** 设备状态 */
    deviceStatus?: string;
}
