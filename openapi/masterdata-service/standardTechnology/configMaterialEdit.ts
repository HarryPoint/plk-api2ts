// 标准工艺某一类别物料编辑请求对象
export interface I标准工艺某一类别物料编辑请求对象 {
    // 标准工艺id, 新增时传递为空
    standardTechnologyId: number;
    // 标准工艺名称
    standardTechnologyName: string;
    // 所属分类id
    standardTechnologyCategoryId: number;
    // 缩略图
    thumbnail: string;
    // 是否是暂存 Y暂存 N发布
    isStaging: string;
    // 标准工艺节点编辑请求对象 发布时传递
    nodeEditRequest: 标准工艺节点响应对象_1;
    // 标准工艺画布快照 暂存时必须传递
    canvasSnapshot;
    // 条件组id(该工艺对应的条件组id)
    standardTechnologyConditionGroupId: number;
    // 条件来源应用编号
    conditionFromFlowPathCode: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
