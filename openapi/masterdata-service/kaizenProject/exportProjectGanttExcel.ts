import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/kaizen项目相关/exportProjectGanttExcelUsingPOST
export default function fetchMethod(data: IProjectGanttChartQueryObject) {
    return post<IJSONResultlong['data']>({
      url: "/masterdata-service/kaizenProject/exportProjectGanttExcel",
      data,
    });
}
// 项目甘特图查询对象
export interface IProjectGanttChartQueryObject {
    // 项目名称
    projectName: string;
    // 项目任务名称
    projectTaskName: string;
    // 项目类型集合
    projectTypeList: string[];
    // 任务优先级集合
    priorityList: string[];
    // 项目状态集合
    projectStatusList: string[];
    // 任务状态
    projectTaskStatusList: string[];
    // 项目负责人id集合
    projectLeaderIdList: number[];
    // 任务执行人id集合
    projectTaskLeaderIdList: number[];
    // 项目查询开始日期
    projectStartDate: string;
    // 项目查询截止日期
    projectEndDate: string;
    // 项目任务查询开始日期
    projectTaskStartDate: string;
    // 项目任务查询截止日期
    projectTaskEndDate: string;
    // 项目id集合
    projectIdList: number[];
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
