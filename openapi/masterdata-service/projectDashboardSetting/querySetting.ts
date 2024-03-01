import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目大屏设置相关/querySettingUsingPOST
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultProjectLargeScreenSettingsSaveRequestDto>(
        {
            url: "/masterdata-service/projectDashboardSetting/querySetting",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«项目大屏设置保存请求dto» */
export interface IJSONResultProjectLargeScreenSettingsSaveRequestDto {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProjectLargeScreenSettingsSaveRequestDto;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目大屏设置保存请求dto */
export interface IProjectLargeScreenSettingsSaveRequestDto {
    /** 排除的项目ids */
    excludeProjectIds?: string[];
    /** 项目类型ids */
    projectTypeIds?: string[];
    /** 统计范围 */
    scope?: EProjectLargeScreenSettingsSaveRequestDto_scope;
}

export enum EProjectLargeScreenSettingsSaveRequestDto_scope {
    /** 全部项目 */
    ALL = "ALL",
    /** 指定项目类型 */
    SPECIFY_PROJECT_TYPE = "SPECIFY_PROJECT_TYPE",
    /** 指定不统计的项目 */
    EXCLUDE_PROJECT = "EXCLUDE_PROJECT"
}
