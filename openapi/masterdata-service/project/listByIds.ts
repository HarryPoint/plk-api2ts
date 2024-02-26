import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目相关/listByIdsUsingPOST
*/
export default function fetchMethod(data: number[], extraOptions?: any) {
    return http<IJSONResultListProjectResponse>(
        {
            url: "/masterdata-service/project/listByIds",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目响应»» */
export interface IJSONResultListProjectResponse {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IProjectResponse[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 项目响应 */
export interface IProjectResponse {
    /** id */
    id: number;
    /** 项目编号 */
    code: string;
    /** 项目名称 */
    name: string;
    /** 项目状态 */
    projectStatus: string;
    /** 初始化状态 */
    projectInitStatus: string;
    /** 是否超期 */
    isOverdue: string;
    /** 超期天数（天） */
    overdueDayCount: number;
    /** 项目类型id */
    projectTypeId: number;
    /** 项目经理id */
    projectManagerId: number;
    /** 主责部门 */
    mainDutyDeptId: number;
    /** 项目开始日期 */
    projectBeginDate: string;
    /** 项目结束日期 */
    projectEndDate: string;
    /** 项目目的 */
    projectGoal: string;
    /** 项目文件key */
    projectFileKey: string;
    /** 项目简介 */
    projectIntro: string;
    /** 项目大类 */
    projectCategory: string;
}
