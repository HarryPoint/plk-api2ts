import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目大屏设置相关/saveSettingUsingPOST_1
*/
export default function fetchMethod(options: { data: IProjectLargeScreenSettingsSaveRequestDto1 }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/projectDashboardSetting/saveSetting",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 项目大屏设置保存请求dto_1 */
export interface IProjectLargeScreenSettingsSaveRequestDto1 {
    /** 统计范围 */
    scope: ('ALL' | 'SPECIFY_PROJECT_TYPE' | 'EXCLUDE_PROJECT');
    /** 项目类型ids */
    projectTypeIds?: number[];
    /** 排除的项目ids */
    excludeProjectIds?: number[];
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
