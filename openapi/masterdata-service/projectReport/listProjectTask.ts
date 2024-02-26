import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目报表相关/listProjectTaskUsingPOST
*/
export default function fetchMethod(options: { data: IItemNameNumberPublicQueryObject }, extraOptions?: any) {
    return http<IJSONResultListProjectReportBaseResponseObject>(
        {
            url: "/masterdata-service/projectReport/listProjectTask",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 项目名称编号公共查询对象 */
export interface IItemNameNumberPublicQueryObject {
    /** 名称or编号 */
    nameOrCode?: string;
    /** 条数 */
    limit?: number;
    /** 项目计划ids */
    projectPlanIds?: number[];
    /** undefined */
    ids?: number[];
    /** undefined */
    projectIds?: number[];
    /** undefined */
    statusList?: string[];
}
/** JSONResult«List«项目报表基础响应对象»» */
export interface IJSONResultListProjectReportBaseResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectReportBaseResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 项目报表基础响应对象 */
export interface IProjectReportBaseResponseObject {
    /** id */
    id?: number;
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
    /** 项目id */
    projectId?: number;
    /** 项目名称 */
    projectName?: string;
    /** 项目编号 */
    projectCode?: string;
    /** 项目类型id */
    projectTypeId?: number;
    /** 项目类型名称 */
    projectTypeName?: string;
    /** 项目大类 */
    projectCategory?: string;
    /** 项目大类名称 */
    projectCategoryName?: string;
    /** 项目经理名称 */
    projectManagerName?: string;
    /** 是否超期 */
    isOverdue?: ('Y' | 'N');
    /** 超期天数(天) */
    overdueDay?: number;
    /** 状态 */
    status?: ('HANDLING' | 'COMPLETE' | 'NOT_PASS' | 'STAGING' | 'INVALID');
    /** 来源应用编号 */
    fromAppCode?: string;
    /** 来源应用id */
    fromAppId?: number;
    /** undefined */
    projectManagerId?: number;
}
