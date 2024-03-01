import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目大屏设置相关/saveSettingUsingPOST_1
*/
export default function fetchMethod(options: { data: IProjectLargeScreenSettingsSaveRequestDto1 }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/projectDashboardSetting/saveSetting",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目大屏设置保存请求dto_1 */
export interface IProjectLargeScreenSettingsSaveRequestDto1 {
    /** 排除的项目ids */
    excludeProjectIds?: string[];
    /** 项目类型ids */
    projectTypeIds?: string[];
    /** 统计范围 */
    scope: EProjectLargeScreenSettingsSaveRequestDto1_scope;
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

export enum EProjectLargeScreenSettingsSaveRequestDto1_scope {
    /** 全部项目 */
    ALL = "ALL",
    /** 指定项目类型 */
    SPECIFY_PROJECT_TYPE = "SPECIFY_PROJECT_TYPE",
    /** 指定不统计的项目 */
    EXCLUDE_PROJECT = "EXCLUDE_PROJECT"
}
