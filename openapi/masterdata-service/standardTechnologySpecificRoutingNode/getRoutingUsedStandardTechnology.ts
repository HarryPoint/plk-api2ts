import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/标准工艺具体工艺路径节点相关/getRoutingUsedStandardTechnologyUsingPOST
export default function fetchMethod(data: IStandardProcessQueryObjectOccupiedByProcessPath) {
    return post<IJSONResultListStandardProcessResponseOccupiedByTheProcessPath>({
      url: "/masterdata-service/standardTechnologySpecificRoutingNode/getRoutingUsedStandardTechnology",
      data,
    });
}
// 工艺路径占用的标准工艺查询对象
export interface IStandardProcessQueryObjectOccupiedByProcessPath {
    // routingId
    routingId: number;
    // 当前的标准工艺id, 创建标准工艺阶段 传递null, 编辑标准工艺阶段 传递编辑的标准工艺id
    standardTechnologyId: number;
}
// JSONResult«List«工艺路径占用的标准工艺响应»»
export interface IJSONResultListStandardProcessResponseOccupiedByTheProcessPath {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IStandardProcessResponseForProcessPathOccupancy[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工艺路径占用的标准工艺响应
export interface IStandardProcessResponseForProcessPathOccupancy {
    // 标准工艺id
    standardTechnologyId: number;
    // 标准工艺名称
    standardTechnologyName: string;
    // 所属分类名称
    standardTechnologyCategoryName: string;
}
